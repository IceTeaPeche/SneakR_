import json
import csv


with open('data.json') as json_file:
    data = json.load(json_file)

data_file = open('data_file.tsv', 'w', newline='')
csv_writer = csv.writer(data_file, delimiter='\t')

header = ['id'] + list(data[0]['attributes'].keys())
csv_writer.writerow(header)

for emp in data:
    row = [emp['id']] + list(emp['attributes'].values())
    csv_writer.writerow(row)

data_file.close()
