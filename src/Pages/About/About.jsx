import "./About.css";
import Certificate from "../../Components/Certificate/Certificate";

const About = () => {
  return (
    <div className="about">
      <div className="cv">
        <div className="education">
          <h2> განათლება/ტრენინგები</h2>
          <div className="edu edu1">
            <h3>2023-2024</h3>
            <p>
              {" "}
              <span>სქილვილი </span> ფრონტ-ენდ-დეველოპმენტი/რეაქტი
            </p>
          </div>
          <div className="edu edu2">
            <h3>2023-2024</h3>
            <p>
              {" "}
              <span>აიტი აკადემია სტეპი </span> ფრონტ-ენდ-დეველოპმენტი/ანგულარი
            </p>
          </div>
          <div className="edu edu3">
            <h3>2022-2023</h3>
            <p>
              {" "}
              <span>ბითქემფი </span> ფრონტ-ენდ-დეველოპმენტი/რეაქტი
            </p>
          </div>

          <div className="edu edu4">
            <h3>2020</h3>
            <p>
              {" "}
              <span>დავით ჩიკვაიძე </span> გაყიდვების ტექნიკები
            </p>
          </div>

          <div className="edu edu5">
            <h3>2019</h3>
            <p>
              {" "}
              <span>თათია ტურაშვილი</span> სერვის მენეჯმენტი
            </p>
          </div>

          <div className="edu edu6">
            <h3>2016</h3>
            <p>
              {" "}
              <span>მართვის აკადემია/ალექსანდრე ჯეჯელავა </span> ეფექტური
              კომუნიკაცია და დროის მართვა
            </p>
          </div>

          <div className="edu edu7">
            <h3>2014-2015</h3>
            <p>
              {" "}
              <span>ჯიპიაი ჰოლდინგი </span> გაყიდვების ტექნიკები,გაყიდვების
              მენეჯმენტი
            </p>
          </div>
          <div className="edu edu8">
            <h3>2013</h3>
            <p>
              {" "}
              <span>საქართველოს ტექნიკური უნივერსიტეტი </span> უმაღლესი კლასის
              მეჯმენტი
            </p>
          </div>
          <div className="edu edu9">
            <h3>2013-2015</h3>
            <p>
              {" "}
              <span>საქართველოს ტექნიკური უნივერსიტეტი </span>{" "}
              ბიზნეს-ადმინისტრირების მაგისტრი
            </p>
          </div>
          <div className="edu edu10">
            <h3>2010-2013</h3>
            <p>
              {" "}
              <span>საქართველოს ტექნიკური უნივერსიტეტი </span> ტელე-რადიო
              ჟურნალისტიკა, ბაკალავრი
            </p>
          </div>
          <div className="edu edu11">
            <h3>2009-2013</h3>
            <p>
              {" "}
              <span>საქართველოს ტექნიკური უნივერსიტეტი </span>{" "}
              ბიზნეს-ადმინისტრირება, ბაკალავრი
            </p>
          </div>
        </div>
        <div className="experience">
          <h2> სამუშაო გამოცდილება</h2>
          <div className="job job1">
            <h3>2015-დღემდე</h3>
            <p>
              <span>სადაზღვევო კომპანია პრაიმი</span>კორპორატიული გაყიდვების
              მენეჯერი
            </p>
          </div>
          <div className="job job2">
            <h3>2020-დღემდე</h3>
            <p>
              <span>ალდაგი</span>აგროდაზღვევის გაყიდვების მენეჯერი
            </p>
          </div>
          <div className="job job3">
            <h3>2020-2023</h3>
            <p>
              <span>სადაზღვევო კომპანია ნიუვიჟენი</span>აგროდაზღვევის გაყიდვების
              მენეჯერი
            </p>
          </div>
          <div className="job job4">
            <h3>2021-2023</h3>
            <p>
              <span>ლიბერთი ბანკი</span>აგროდაზღვევის სესხების ოფიცერი
            </p>
          </div>
          <div className="job job5">
            <h3>2021-2023</h3>
            <p>
              <span>კრისტალი</span>აგროდაზღვევის სესხების ოფიცერი
            </p>
          </div>
          <div className="job job6">
            <h3>2016-2020</h3>
            <p>
              <span>ჯიპიაი ჰოლდინგი</span>აგროდაზღვევის გაყიდვების მენეჯერი
            </p>
          </div>
          <div className="job job7">
            <h3>2016-2020</h3>
            <p>
              <span>ფინკა ბანკი</span>აგროდაზღვევის სესხების ექსპერტი
            </p>
          </div>
          <div className="job job8">
            <h3>2012-2015</h3>
            <p>
              <span>ჯიპიაი ჰოლდინგი</span>საცალო გაყიდვების სპეციალისტი
            </p>
          </div>
        </div>
      </div>
      <div className="certificates">
        <Certificate />
      </div>
      <div className="skills"></div>
    </div>
  );
};
export default About;
