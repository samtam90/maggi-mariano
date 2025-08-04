import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Trieste" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});
