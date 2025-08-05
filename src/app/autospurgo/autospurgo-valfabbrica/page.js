import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Valfabbrica",
    canonical: links.autospurgo["valfabbrica"],
});
export default withBaseProps({ 
    title: "Autospurgo Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
