import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Napoli" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});
