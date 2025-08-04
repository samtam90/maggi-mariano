import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Lecce" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
