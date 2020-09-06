import {showAlert} from "./mesages";
import "./styles.scss";
import $ from "jquery";
import { v4 as uuidv4 } from 'uuid'

document.getElementById("btn-alert").addEventListener('click', showAlert)


$('#btn-jq').click(()=> alert(uuidv4()));