import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bari", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bari"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});
