
CREATE TABLE IF NOT EXISTS Bandas_lama (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  music_genre VARCHAR(255) NOT NULL,
  responsible VARCHAR(255) UNIQUE NOT NULL 
);

CREATE TABLE IF NOT EXISTS Shows_lama (
  id VARCHAR(255) PRIMARY KEY,
  week_day VARCHAR(255) NOT NULL,
  start_time INT NOT NULL,
  end_time INT NOT NULL,
  band_id VARCHAR(255) NOT NULL,
  FOREIGN KEY(band_id) REFERENCES Bandas_lama (id)
);


CREATE TABLE IF NOT EXISTS User_lama (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
);


CREATE TABLE IF NOT EXISTS Ingressos_lama (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  value DECIMAL NOT NULL,
  tickets_qty INT NOT NULL,
  tickets_balance INT NOT NULL,
  id_show VARCHAR(255),
  FOREIGN KEY(id_show) REFERENCES Shows_lama (id)
);

CREATE TABLE IF NOT EXISTS Comprar_ingressos_lama (
  id VARCHAR(255) PRIMARY KEY,
  id_user VARCHAR(255) NOT NULL,
  tickets INT NOT NULL,
  id_tickets VARCHAR(255),
  FOREIGN KEY(id_user) REFERENCES User_lama (id),
  FOREIGN KEY(id_tickets) REFERENCES Ingressos_lama (id)
);


