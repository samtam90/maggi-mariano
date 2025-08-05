import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Vallo di Nera",
    canonical: links.autospurgo["vallo-di-nera"],
});
export default withBaseProps({ 
    title: "Autospurgo Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
