import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rufina",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});