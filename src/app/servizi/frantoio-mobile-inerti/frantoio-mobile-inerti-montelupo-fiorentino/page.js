import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Montelupo Fiorentino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["montelupo-fiorentino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});
