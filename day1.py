from functools import reduce


def parse_calories_to_list() -> list:
    with open('day1_input.txt') as f:
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


elfves_calories = parse_calories_to_list()
total_elves_calories = list(map(lambda x: sum(x), elfves_calories))

max_sum_calories = reduce(lambda x, y: x if x > y else y, total_elves_calories)
print(max_sum_calories)

total_elves_calories = sorted(total_elves_calories, reverse=True)
sum_top_three = sum(total_elves_calories[0:3])
print(sum_top_three)
