import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Dicomano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["dicomano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});
