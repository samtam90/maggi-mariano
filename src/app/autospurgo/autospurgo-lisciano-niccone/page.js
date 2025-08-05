import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lisciano Niccone",
    canonical: links.autospurgo["lisciano-niccone"],
});
export default withBaseProps({ 
    title: "Autospurgo Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
