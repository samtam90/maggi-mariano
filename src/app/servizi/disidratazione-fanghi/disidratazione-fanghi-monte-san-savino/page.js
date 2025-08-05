import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monte San Savino",
  canonical: links.servizi["disidratazione-fanghi"]["monte-san-savino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monte San Savino",
  locationNames: { label: "Monte San Savino", href: "monte-san-savino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
