INSERT INTO departments(name) VALUES
    ('Sales')
    ('Engineering')
    ('Legal')
    ('Finance')
    ('Executive');
INSERT INTO roles(titles,salary,department_id) VALUES
    ('Sales Lead', 100000, 1),
    ('Sales Associate', 50000, 1),
    ('Engineering Lead', 125000, 2),
    ('Engineering Associate', 75000, 2),
    ('Software Engineer', 150000, 2),
    ('Legal Team Lead', 100000, 3),
    ('Lawyer', 250000, 3),
    ('Finance Lead', 75000, 4),
    ('Finance Associate' 50000, 4),
    ('CEO', 1000000, 5)
INSERT INTO employees(first_name,last_name,role_id,manager_id) VALUES
    ("Henry", "Bill", 1, NULL),
    ("Ben", "Robert", 2, NULL),
    ("Marcus", "Honey", 3, 1),
    ("Test", "Employee", 3, NULL)
    ("Donny", "Bratton", 4, 1),
    ("Mirage", "Apex", 4, NULL),
    ("Dax", "Buratto", 4, NULL)
    ("Adelina", "Ruiz", 5, 11)