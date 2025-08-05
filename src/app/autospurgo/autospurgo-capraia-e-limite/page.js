import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Capraia e Limite",
    canonical: links.autospurgo["capraia-e-limite"],
});
export default withBaseProps({ 
    title: "Autospurgo Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
