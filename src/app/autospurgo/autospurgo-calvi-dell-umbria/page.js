import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Calvi dell'Umbria",
    canonical: links.autospurgo["calvi-dell-umbria"],
});
export default withBaseProps({ 
    title: "Autospurgo Calvi dell'Umbria", 
    locationNames: {label: "Calvi dell'Umbria", href: "calvi-dell-umbria"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
