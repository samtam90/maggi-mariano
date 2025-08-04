import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti San Giovanni Valdarno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["san-giovanni-valdarno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
