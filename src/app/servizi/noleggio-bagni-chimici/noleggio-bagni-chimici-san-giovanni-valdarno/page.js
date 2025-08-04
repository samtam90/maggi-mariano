import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Giovanni Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-giovanni-valdarno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici San Giovanni Valdarno", 
  locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"} 
});
