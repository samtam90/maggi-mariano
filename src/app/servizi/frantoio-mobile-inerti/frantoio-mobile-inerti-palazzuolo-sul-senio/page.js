import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Palazzuolo sul Senio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["palazzuolo-sul-senio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});
