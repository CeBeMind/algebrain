SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `algebrain` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `algebrain` ;

-- -----------------------------------------------------
-- Table `algebrain`.`Branches`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Branches` (
  `BranchID` INT NOT NULL AUTO_INCREMENT ,
  `BrName` VARCHAR(45) NOT NULL ,
  `BrDescription` VARCHAR(250) NOT NULL ,
  PRIMARY KEY (`BranchID`) )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `algebrain`.`Chapters`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Chapters` (
  `ChapterID` INT NOT NULL AUTO_INCREMENT ,
  `IdBranch` INT NOT NULL ,
  `ChName` VARCHAR(45) NOT NULL ,
  `ChDescription` VARCHAR(250) NULL ,
  PRIMARY KEY (`ChapterID`) ,
  	INDEX `fk_IdBranch_idx` (`IdBranch` ASC) ,
  CONSTRAINT `fk_IdBranch`
    FOREIGN KEY (`IdBranch` )
    REFERENCES `algebrain`.`Branches` (`BranchID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `algebrain`.`Sections`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Sections` (
  `SectionID` INT NOT NULL AUTO_INCREMENT ,
  `IdChapter` INT NOT NULL ,
  `SectName` VARCHAR(45) NOT NULL ,
  `SectDescription` VARCHAR(250) NULL ,
  PRIMARY KEY (`SectionID`),
  	INDEX `fk_IdChapter_idx` (`IdChapter` ASC) ,
  CONSTRAINT `fk_IdChapter`
    FOREIGN KEY (`IdChapter` )
    REFERENCES `algebrain`.`Chapters` (`ChapterID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `algebrain`.`Content`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Content` (
  `ContentID` INT NOT NULL AUTO_INCREMENT ,
  `IdSection` INT NOT NULL ,
  `Content` TEXT(3000) NOT NULL ,
  `Content_type_identifier` VARCHAR(3) NULL ,
  PRIMARY KEY (`ContentID`),
  	INDEX `fk_IdSection_idx` (`IdSection` ASC) ,
  CONSTRAINT `fk_IdSection`
    FOREIGN KEY (`IdSection` )
    REFERENCES `algebrain`.`Sections` (`SectionID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `algebrain`.`Users`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Users` (
  `UserID` INT NOT NULL AUTO_INCREMENT ,
  `Username` VARCHAR(20) NOT NULL ,
  `FirstName` VARCHAR(20) NOT NULL ,
  `LastName` VARCHAR(20) NOT NULL ,
  `ProfilePic` VARCHAR(255) NULL ,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `algebrain`.`Experiences`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `algebrain`.`Experiences` (
  `ExperienceID` INT NOT NULL AUTO_INCREMENT ,
  `IdSectionExp` INT NOT NULL ,
  `IdUserExp` INT NOT NULL ,
  `ExpLevel` INT NULL ,
  PRIMARY KEY (`ExperienceID`),
  	INDEX `fk_IdSectionExp_idx` (`IdSectionExp` ASC) ,
  CONSTRAINT `fk_IdSectionExp`
    FOREIGN KEY (`IdSectionExp` )
    REFERENCES `algebrain`.`Sections` (`SectionID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    INDEX `fk_IdUserExp_idx` (`IdUserExp` ASC) ,
  CONSTRAINT `fk_IdUserExp`
    FOREIGN KEY (`IdUserExp` )
    REFERENCES `algebrain`.`Users` (`UserID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


USE `algebrain` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
