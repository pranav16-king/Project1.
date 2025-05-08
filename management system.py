import datetime
import uuid
from threading import Timer
from textblob import TextBlob  # For sentiment analysis
import re  # For extracting keywords

tasks = []
messages = []

def get_user_input():
    print("\nOptions:")
    print("1. Add Task")
    print("2. List Tasks")
    print("3. Prioritize Tasks (Enhanced)")
    print("4. Send Message")
    print("5. List Messages")
    print("6. Search Tasks by Assignee")
    print("7. Delete Task")
    print("8. Update Task")
    print("9. View Task Details")
    print("10. Mark Task as Completed")
    print("11. Exit")
    return input("Enter your choice: ")

def add_task():
    task_name = input("Enter task name: ")
    due_date = input("Enter due date (YYYY-MM-DD): ")

    try:
        due_date = datetime.datetime.strptime(due_date, "%Y-%m-%d").date()
    except ValueError:
        print("Invalid date format. Please enter a valid date in YYYY-MM-DD format.")
        return

    assignee = input("Enter assignee name: ")
    priority = determine_priority(task_name, due_date)
    task = {
        "id": str(uuid.uuid4()),
        "name": task_name,
        "due_date": due_date,
        "priority": priority,
        "assignee": assignee,
        "created_at": datetime.datetime.now(),
        "completed": False
    }
    tasks.append(task)
    schedule_deadline_reminder(task)
    print(f"Task added successfully with priority: {priority} and assigned to: {assignee}")
    print(f"Task ID: {task['id']}")


def list_tasks():
    if not tasks:
        print("No tasks available.")
        return
    for task in tasks:
        print(f"ID: {task['id']}, Name: {task['name']}, Due Date: {task['due_date']}, Priority: {task['priority']}, Assignee: {task['assignee']}, Created At: {task['created_at']}, Completed: {task['completed']}")

def prioritize_tasks():
    if not tasks:
        print("No tasks available to prioritize.")
        return
    tasks.sort(key=lambda x: ("High", "Medium", "Low").index(x["priority"]))
    print("Tasks prioritized successfully!")

def send_message():
    recipient = input("Enter recipient: ")
    content = input("Enter message content: ")
    sentiment = analyze_sentiment(content)
    message = {
        "id": str(uuid.uuid4()),
        "recipient": recipient,
        "content": content,
        "sentiment": sentiment,
        "sent_at": datetime.datetime.now()
    }
    messages.append(message)
    print("Message sent successfully with sentiment:", sentiment)

def list_messages():
    if not messages:
        print("No messages available.")
        return
    for message in messages:
        print(f"ID: {message['id']}, Recipient: {message['recipient']}, Content: {message['content']}, Sent At: {message['sent_at']}, Sentiment: {message['sentiment']}")

def search_tasks_by_assignee():
    assignee_name = input("Enter the assignee's name to search tasks: ")
    filtered_tasks = [task for task in tasks if task['assignee'].lower() == assignee_name.lower()]
    if not filtered_tasks:
        print(f"No tasks found for assignee: {assignee_name}")
        return
    print(f"Tasks assigned to {assignee_name}: {len(filtered_tasks)}")
    for task in filtered_tasks:
        print(f"ID: {task['id']}, Name: {task['name']}, Due Date: {task['due_date']}, Priority: {task['priority']}, Created At: {task['created_at']}, Completed: {task['completed']}")

def delete_task():
    task_id = input("Enter the task ID to delete: ")
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    print(f"Task with ID {task_id} has been deleted.")

def update_task():
    task_id = input("Enter the task ID to update: ")
    task = next((task for task in tasks if task['id'] == task_id), None)
    if not task:
        print(f"Task with ID {task_id} not found.")
        return

    task_name = input(f"Enter new task name (current: {task['name']}): ") or task['name']
    due_date = input(f"Enter new due date (YYYY-MM-DD) (current: {task['due_date']}): ") or task['due_date']
    assignee = input(f"Enter new assignee name (current: {task['assignee']}): ") or task['assignee']
    
    try:
        due_date = datetime.datetime.strptime(due_date, "%Y-%m-%d").date()
    except ValueError:
        print("Invalid date format. Please enter a valid date in YYYY-MM-DD format.")
        return

    priority = determine_priority(task_name, due_date)

    task.update({
        "name": task_name,
        "due_date": due_date,
        "priority": priority,
        "assignee": assignee
    })
    
    print(f"Task with ID {task_id} has been updated.")

def view_task_details():
    task_id = input("Enter the task ID to view details: ")
    task = next((task for task in tasks if task['id'] == task_id), None)
    if not task:
        print(f"Task with ID {task_id} not found.")
        return
    print(f"ID: {task['id']}, Name: {task['name']}, Due Date: {task['due_date']}, Priority: {task['priority']}, Assignee: {task['assignee']}, Created At: {task['created_at']}, Completed: {task['completed']}")

def mark_task_as_completed():
    task_id = input("Enter the task ID to mark as completed: ")
    task = next((task for task in tasks if task['id'] == task_id), None)
    if not task:
        print(f"Task with ID {task_id} not found.")
        return
    task['completed'] = True
    print(f"Task with ID {task_id} has been marked as completed.")

def determine_priority(task_name, due_date):
    # Rule-based priority classification
    keywords = ["urgent", "critical", "asap", "important", "high priority"]
    keyword_match = any(keyword in task_name.lower() for keyword in keywords)
    days_left = (due_date - datetime.date.today()).days

    if keyword_match and days_left <= 3:
        return "High"
    elif days_left <= 7:
        return "Medium"
    else:
        return "Low"

def analyze_sentiment(text):
    # Using TextBlob for local sentiment analysis
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    if sentiment > 0:
        return "Positive"
    elif sentiment < 0:
        return "Negative"
    else:
        return "Neutral"

def schedule_deadline_reminder(task):
    reminder_time = datetime.datetime.combine(task['due_date'], datetime.time(9, 0)) - datetime.timedelta(days=1)
    delay = (reminder_time - datetime.datetime.now()).total_seconds()
    if delay > 0:
        Timer(delay, send_deadline_reminder, [task]).start()

def send_deadline_reminder(task):
    reminder_message = f"Reminder: The task '{task['name']}' assigned to {task['assignee']} is due on {task['due_date']}."
    send_message_to_assignee(task['assignee'], reminder_message)

def send_message_to_assignee(assignee, content):
    message = {
        "id": str(uuid.uuid4()),
        "recipient": assignee,
        "content": content,
        "sent_at": datetime.datetime.now()
    }
    messages.append(message)
    print(f"Reminder sent to {assignee} with content: {content}")

def main():
    while True:
        choice = get_user_input()
        if choice == "1":
            add_task()
        elif choice == "2":
            list_tasks()
        elif choice == "3":
            prioritize_tasks()
        elif choice == "4":
            send_message()
        elif choice == "5":
            list_messages()
        elif choice == "6":
            search_tasks_by_assignee()
        elif choice == "7":
            delete_task()
        elif choice == "8":
            update_task()
        elif choice == "9":
            view_task_details()
        elif choice == "10":
            mark_task_as_completed()
        elif choice == "11":
            print("Exiting the program. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()