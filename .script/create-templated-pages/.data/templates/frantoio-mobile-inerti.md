import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti [name]", 
    canonical: links.servizi["frantoio-mobile-inerti"]["[path]"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
