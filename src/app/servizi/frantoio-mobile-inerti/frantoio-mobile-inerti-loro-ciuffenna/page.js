import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Loro ciuffenna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["loro-ciuffenna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});
