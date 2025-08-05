import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Savignano sul Rubicone",
  canonical: links.servizi["disidratazione-fanghi"]["savignano-sul-rubicone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Savignano sul Rubicone",
  locationNames: { label: "Savignano sul Rubicone", href: "savignano-sul-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
