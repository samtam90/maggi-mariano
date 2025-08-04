import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Giovanni Valdarno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});