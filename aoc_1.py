def parse_calories_to_list() -> list:
    with open('aoc_1.txt') as f:
        lines = f.readlines()

    elfves_calories = []
    elf_calories = []
    for line in lines:
        if line == '\n':
            elfves_calories.append(elf_calories)
            elf_calories = []
        else:
            elf_calories.append(int(line))

    return elfves_calories


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
