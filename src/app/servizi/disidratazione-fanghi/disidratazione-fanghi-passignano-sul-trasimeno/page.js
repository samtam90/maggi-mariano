import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Passignano sul Trasimeno",
  canonical: links.servizi["disidratazione-fanghi"]["passignano-sul-trasimeno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Passignano sul Trasimeno",
  locationNames: { label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
