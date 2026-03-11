import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.webp";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import Ind_doc1 from "./Ind_doc1.jpg";
import Ind_doc2 from "./Ind_doc2.jpg";
import Ind_doc3 from "./Ind_doc3.jpeg";
import Ind_doc4 from "./Ind_doc4.jpeg";
import Ind_doc5 from "./Ind_doc5.jpg";
import Ind_doc6 from "./Ind_doc6.jpg";
import Ind_doc7 from "./Ind_doc7.jpg";
import Ind_doc8 from "./Ind_doc8.jpeg";
import Ind_doc9 from "./Ind_doc9.jpg";
import Ind_doc10 from "./Ind_doc10.jpg";
import Ind_doc11 from "./Ind_doc11.jpeg";
import Ind_doc12 from "./Ind_doc12.jpg";
import Ind_doc13 from "./Ind_doc13.jpg";
import Ind_doc14 from "./Ind_doc14.jpg";
import Ind_doc15 from "./Ind_doc15.jpeg";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
   appointment_img,
   header_img,
   group_profiles,
   logo,
   chats_icon,
   verified_icon,
   info_icon,
   profile_pic,
   arrow_icon,
   contact_image,
   about_image,
   menu_icon,
   cross_icon,
   dropdown_icon,
   upload_icon,
   stripe_logo,
   razorpay_logo,
};

export const specialityData = [
   {
      speciality: "General physician",
      image: General_physician,
   },
   {
      speciality: "Gynecologist",
      image: Gynecologist,
   },
   {
      speciality: "Dermatologist",
      image: Dermatologist,
   },
   {
      speciality: "Pediatricians",
      image: Pediatricians,
   },
   {
      speciality: "Neurologist",
      image: Neurologist,
   },
   {
      speciality: "Gastroenterologist",
      image: Gastroenterologist,
   },
];

export const doctors = [
   {
      _id: "doc1",
      name: "Dr.Amit Sharma",
      image: Ind_doc1,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about: "Dr.Amit Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Amit Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "2nd Floor, Sai Plaza, MG Road,",
         line2: "Andheri East, Mumbai - 400069, Maharashtra",
      },
   },
   {
      _id: "doc2",
      name: "Dr.Rahul Verma",
      image: Ind_doc2,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about: "Dr.Rahul Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Rahul Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
         line1: "Plot No. 45, Road No. 12,",
         line2: "Banjara Hills, Hyderabad – 500034, Telangana",
      },
   },
   {
      _id: "doc3",
      name: "Dr.Kiran Patel",
      image: Ind_doc3,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about: "Dr.Kiran Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Kiran Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
         line1: "Shop No. 18, City Center Mall",
         line2: "Sector 10, Noida – 201301, Uttar Pradesh",
      },
   },
   {
      _id: "doc4",
      name: "Dr. Sarah Patel",
      image: Ind_doc4,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about: "Dr.Sarah Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Sarah Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
         line1: "No. 112, 1st Main Road",
         line2: "Indiranagar, Bengaluru – 560038, Karnataka",
      },
   },
   {
      _id: "doc5",
      name: "Dr.Suresh Nair",
      image: Ind_doc5,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about: " Dr.Suresh Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Suresh Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "Opp. Civil Hospital",
         line2: "Ashram Road, Ahmedabad – 380009, Gujarat",
      },
   },
   {
      _id: "doc6",
      name: "Dr.Rohan Mehta",
      image: Ind_doc6,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about: " Dr.Rohan Mehta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Rohan Mehta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "House No. 27, Model Town",
         line2: "Ludhiana – 141002, Punjab",
      },
   },
   {
      _id: "doc7",
      name: "Dr. Arjun Singh",
      image: Ind_doc7,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about: "Dr. Arjun Singh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Arjun Singh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "Flat No. 301, Shree Apartments",
         line2: "Karve Nagar, Pune – 411052, Maharashtra",
      },
   },
   {
      _id: "doc8",
      name: "Dr. Vinod Mishra ",
      image: Ind_doc8,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about: "Dr. Vinod Mishra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Vinod Mishra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
         line1: "3rd Floor, Silver Arcade",
         line2: "CG Road, Navrangpura, Ahmedabad – 380006",
      },
   },
   {
      _id: "doc9",
      name: "Dr. Farah Khan",
      image: Ind_doc9,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about: "Dr. Farah Khan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Farah Khan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
         line1: "B-12, South Extension Part 1",
         line2: "New Delhi – 110049",
      },
   },
   {
      _id: "doc10",
      name: "Dr.Pooja Choudhury",
      image: Ind_doc10,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about: "Dr.Pooja Malhotra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Pooja Malhotra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
         line1: "Sector 21, Near Bus Stand",
         line2: "Chandigarh – 160022",
      },
   },
   {
      _id: "doc11",
      name: "Dr.Kavita Joshi",
      image: Ind_doc11,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about: "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "No. 88, Mount Road",
         line2: "T. Nagar, Chennai – 600017, Tamil Nadu",
      },
   },
   {
      _id: "doc12",
      name: "Dr. Sneha Iyer",
      image: Ind_doc12,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about: "Dr. Sneha Iyer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Sneha Iyer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "Rajendra Nagar",
         line2: "Patna – 800016, Bihar",
      },
   },
   {
      _id: "doc13",
      name: "Dr. Neha Gupta",
      image: Ind_doc13,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about: "Dr. Neha Gupta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Neha Gupta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
         line1: "Block A, Alambagh",
         line2: "Lucknow – 226005, Uttar Pradesh",
      },
   },
   {
      _id: "doc14",
      name: "Dr.Meegada Deepika",
      image: Ind_doc14,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about: "Dr.Meegada Deepika has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Meegada Deepika has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
         line1: "VIP Road, Near Airport",
         line2: "Kolkata – 700052, West Bengal",
      },
   },
   {
      _id: "doc15",
      name: "Dr.Regidi Abhishek",
      image: Ind_doc15,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about: "Dr.Regidi Abhishek has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Regidi Abhishek has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
         line1: "MG Road, Bengaluru",
         line2: "Near City Hospital",
         line3: "Karnataka, India",
      },
   },
];
