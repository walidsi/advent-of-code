def parse_calories_to_list() -> list:
    with open('aoc_1.txt') as f:
        lines = f.readlines()

    elves_calories = []
    elf_calories = []
    for line in lines:
        if line == '\n':
            elves_calories.append(elf_calories)
            elf_calories = []
        else:
            elf_calories.append(int(line))

    return elves_calories


def calculate_max_elf_calories() -> int:
    elfves_calories = parse_calories_to_list()

    max_sum_calories = 0

    for calories in elfves_calories:
        sum_calories = sum(calories)
        if sum_calories > max_sum_calories:
            max_sum_calories = sum_calories

    return max_sum_calories


max_sum_calories = calculate_max_elf_calories()
print(max_sum_calories)


def calculate_top_three_elf_calories() -> int:
    elfves_calories = parse_calories_to_list()

    total_elves_calories = []
    for calories in elfves_calories:
        total_elves_calories.append(sum(calories))

    total_elves_calories = sorted(total_elves_calories, reverse=True)

    return sum(total_elves_calories[0:3])


sum_top_three = calculate_top_three_elf_calories()
print(sum_top_three)
