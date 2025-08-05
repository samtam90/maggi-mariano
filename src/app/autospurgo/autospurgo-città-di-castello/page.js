import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Città di Castello",
    canonical: links.autospurgo["città-di-castello"],
});
export default withBaseProps({ 
    title: "Autospurgo Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
