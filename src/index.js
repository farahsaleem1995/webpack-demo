import AlertService from "./app/alert-service";
import ComponentService from "./app/component-service";
import app from "./app/app";

import "./styles.css";

const alertService = new AlertService();
const componentService = new ComponentService();

app(alertService, componentService);
