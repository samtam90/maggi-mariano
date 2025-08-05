import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Campi Bisenzio",
    canonical: links.autospurgo["campi-bisenzio"],
});
export default withBaseProps({ 
    title: "Autospurgo Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
