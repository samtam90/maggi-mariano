import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Messina" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});
