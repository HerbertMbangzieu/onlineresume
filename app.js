import { Contact } from "./components/Contact.js";
import { Education } from "./components/Education.js";
import { Identity } from "./components/Identity.js";
import { Job } from "./components/Job.js";
import { Language } from "./components/Language.js";
import { Skill } from "./components/Skill.js";
import { Tool } from "./components/Tool.js";
import { data } from "./data.js";

const left = document.getElementById("left");
const right = document.getElementById("right");

const identity = new Identity(data.identity);
const contact = new Contact(data.contact);
const job = new Job(data.jobs);
const education = new Education(data.education);
const skill = new Skill(data.skills);
const language = new Language(data.languages);
const tool = new Tool(data.tools);
identity.appendTo(left);
contact.appendTo(right);
job.appendTo(left);
education.appendTo(left);
skill.appendTo(right);
tool.appendTo(right);
language.appendTo(right);
console.log("Javascript");
console.log(data);
