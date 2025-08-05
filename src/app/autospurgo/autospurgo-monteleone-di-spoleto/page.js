import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Monteleone di Spoleto",
    canonical: links.autospurgo["monteleone-di-spoleto"],
});
export default withBaseProps({ 
    title: "Autospurgo Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
