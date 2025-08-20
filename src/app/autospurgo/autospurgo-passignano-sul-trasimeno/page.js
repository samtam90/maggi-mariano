import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Passignano sul Trasimeno",
    canonical: links.autospurgo["passignano-sul-trasimeno"],
});
export default withBaseProps({ 
    title: "Autospurgo Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
