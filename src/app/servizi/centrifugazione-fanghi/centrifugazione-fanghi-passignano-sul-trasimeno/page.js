import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Passignano sul Trasimeno",
  canonical: links.servizi["centrifugazione-fanghi"]["passignano-sul-trasimeno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Passignano sul Trasimeno",
  locationNames: { label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
