from pymongo import MongoClient
client = MongoClient("mongodb://127.0.0.1:27017")
db = client.wikiRaces


def take_and_confirm_input(prompt):
    print(prompt)
    choice = input("> ")

    print("Does that look good? (y/n)")
    confirm = input("> ")
    if confirm == "y":
        return choice
    elif confirm == "n":
        print("Cancelled - Exiting.")
        exit(1)
    else:
        return take_and_confirm_input(prompt)


def list_users():
    print("Listing users. \n")
    for item in db.users.find():
        print(f'name = "{item["name"]}"')


def list_full_user_data():
    print("Listing users. \n")
    for item in db.users.find():
        print(item)


def list_users_with_ids():
    print("Listing users with ids. \n")
    for item in db.users.find():
        print(f'userId = "{item["userId"]}" \t name = "{item["name"]}"')


def get_id_of_username(username=None):
    if not username:
        print("What is the username you want to get the id of?")
        username = str(input("> "))
    user_ids = []
    for item in db.users.find({"name": username}):
        print("Found the following users:")
        print(f'userId = "{item["userId"]}"\t name = "{item["name"]}"')
        user_ids.push(item["userId"])
    return user_ids


def change_username_by_user_id(user_id=None):
    if not user_id:
        print("What is the user id you want to modify?")
        user_id = str(input("> "))
    users_with_id = list(db.users.find({"userId": user_id}))
    num_of_users_with_id = len(users_with_id)
    if num_of_users_with_id != 1:
        print(f"Error. {num_of_users_with_id} users have that id.")
        exit(1)
    new_name = take_and_confirm_input("What should the new name be?")
    user = users_with_id[0]
    user["name"] = new_name
    db.users.find_one_and_replace({"userId": user_id}, user)


def cancel():
    print("Cancelled - nothing written")
    exit(1)


# This is stolen from an old project of mine
def take_input(commands, word="command"):
    if len(commands) == 1:
        print(f"Only one {word} found.")
        return commands[0]

    print(f"Pick a choice from the following {word}s:")

    for i, function in enumerate(commands, 1):
        print(f"\t{i} - {function.__name__}")

    print(f"\nPress ENTER for last {word}, or type an individual number. \n")

    choice = input("> ")

    # if there is no entry, assume the user wants the last chapter
    if choice == "":
        return commands[len(commands) - 1]
    else:
        try:
            choice.strip()
            choice = int(choice) - 1  # account for one index
            return commands[choice]
        except IndexError:
            print("That index was out of range.\n")
            return take_input(commands, word)
        except:
            print("Enter a number, or hit enter.\n")
            return take_input(commands, word)


list_of_commands = [
    list_users,
    list_users_with_ids,
    get_id_of_username,
    change_username_by_user_id,
    list_full_user_data,
    cancel,
]

choice = take_input(list_of_commands)
choice()

print("")
print("exited")
client.close()
