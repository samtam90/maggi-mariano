import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monte San Savino",
  canonical: links.servizi["centrifugazione-fanghi"]["monte-san-savino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monte San Savino",
  locationNames: { label: "Monte San Savino", href: "monte-san-savino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
