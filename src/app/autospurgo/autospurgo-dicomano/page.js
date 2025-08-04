import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Dicomano",
    canonical: links.autospurgo["dicomano"],
});
export default withBaseProps({ 
    title: "Autospurgo Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});
