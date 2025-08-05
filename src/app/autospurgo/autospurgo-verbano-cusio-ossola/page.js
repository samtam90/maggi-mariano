import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Verbano-Cusio-Ossola",
    canonical: links.autospurgo["verbano-cusio-ossola"],
});
export default withBaseProps({ 
    title: "Autospurgo Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["verbano-cusio-ossola"],
        name: "Verbano-Cusio-Ossola",
    }),
});
