import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Gualdo Tadino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["gualdo-tadino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});
