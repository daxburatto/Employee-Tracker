INSERT INTO departments(department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Legal'),
    ('Finance'),
    ('Executive')
;

INSERT INTO roles(title,salary,department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Sales Associate', 50000, 1),
    ('Engineering Lead', 125000, 2),
    ('Engineering Associate', 75000, 2),
    ('Software Engineer', 150000, 2),
    ('Legal Team Lead', 100000, 3),
    ('Lawyer', 250000, 3),
    ('Finance Lead', 75000, 4),
    ('Finance Associate', 50000, 4),
    ('CEO', 1000000, 5)
;

INSERT INTO managers(name, department_id)
VALUES
    ('Henry Bill', 1),
    ('Ben Robert', 2),
    ('Marcuse Honey', 3),
    ('Adelina Ruiz', 5)
;

INSERT INTO employees(first_name,last_name, role_id, manager_id)
VALUES
    ("Henry", "Bill", 1, 6),
    ("Ben", "Robert", 2, 6),
    ("Marcus", "Honey", 3, 6),
    ("Test", "Employee", 3, 7),
    ("Donny", "Bratton", 4, 4),
    ("Mirage", "Apex", 4, 1),
    ("Dax", "Buratto", 4, 2),
    ("Adelina", "Ruiz", 5, 6, 3)
;