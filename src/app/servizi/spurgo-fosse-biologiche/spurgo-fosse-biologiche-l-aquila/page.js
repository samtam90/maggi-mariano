import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche L'Aquila",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
