import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Viterbo",
    canonical: links.autospurgo["viterbo"],
});
export default withBaseProps({ 
    title: "Autospurgo Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["viterbo"],
        name: "Viterbo",
    }),
});
