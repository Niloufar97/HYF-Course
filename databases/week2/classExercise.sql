CREATE DATABASE Exercise;

USE Exercise;

CREATE TABLE articles
(
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    PRIMARY KEY (id)
    -- FOREIGN KEY (author_id) REFERENCES authors(id),
    -- FOREIGN key (tag_id) REFERENCES tags(tag_id )
)

CREATE TABLE authors(
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(id)
)

insert into articles(title, content) VALUES ("BREAKING NEWS: Water is wet!", "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")

insert into authors(name) VALUES ("James Smith"), ("Jane Jones");

insert into articles_author(article_id, author_id) values (1, 1), (1, 2);

CREATE TABLE articles_author
(
    article_id INT,
    author_id INT,
    PRIMARY KEY (article_id, author_id),
    FOREIGN KEY (article_id) REFERENCES articles(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE tags(
    tag_id INT AUTO_INCREMENT,
    tag_name VARCHAR(255),
    PRIMARY KEY(tag_id)
)

INSERT INTO