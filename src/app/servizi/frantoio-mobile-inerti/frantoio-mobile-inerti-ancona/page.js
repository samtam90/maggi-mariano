import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ancona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ancona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
