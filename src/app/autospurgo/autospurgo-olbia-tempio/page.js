import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Olbia-Tempio" });
export default withBaseProps({ 
    title: "Autospurgo Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});
