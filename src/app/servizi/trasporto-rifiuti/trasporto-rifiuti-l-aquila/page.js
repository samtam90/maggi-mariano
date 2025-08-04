import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti L'Aquila",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});